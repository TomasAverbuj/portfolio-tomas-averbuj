import React, { useEffect, useRef } from 'react';

const WaveEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      class Stage {
        constructor(canvas) {
          this.canvas = canvas;
          this.scene = new THREE.Scene();

          this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          this.renderer = new THREE.WebGLRenderer({ canvas });
          this.renderer.setPixelRatio(window.devicePixelRatio);
          this.renderer.setClearColor(0x121212);
          this._resizeRenderer();

          window.addEventListener('resize', this._resizeRenderer);
        }

        _resizeRenderer = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          this.renderer.setSize(width, height);
          this.camera.aspect = width / height;
          this.camera.updateProjectionMatrix();
        };

        render() {
          this.renderer.render(this.scene, this.camera);
        }

        dispose() {
          window.removeEventListener('resize', this._resizeRenderer);
        }
      }

      class WaveMesh {
        constructor(stage) {
          this.stage = stage;
          const { width, height } = stage.renderer.domElement;

          this.uniforms = {
            resolution: { value: [width, height] },
            time: { value: 0 },
            xScale: { value: 1.0 },
            yScale: { value: 0.5 },
            distortion: { value: 0.05 },
          };

          const positions = new Float32Array([
            -1, -1, 0,  1, -1, 0,  -1, 1, 0,
             1, -1, 0,  -1, 1, 0,   1, 1, 0,
          ]);

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

          const material = new THREE.RawShaderMaterial({
            vertexShader: `
              attribute vec3 position;
              void main() {
                gl_Position = vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              precision highp float;
              uniform vec2 resolution;
              uniform float time;
              uniform float xScale;
              uniform float yScale;
              uniform float distortion;

              void main() {
                vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
                float d = length(p) * distortion;

                float rx = p.x * (1.0 + d);
                float gx = p.x;
                float bx = p.x * (1.0 - d);

                float r = 0.02 / abs(p.y + sin((rx + time) * xScale) * yScale);
                float g = 0.02 / abs(p.y + sin((gx + time) * xScale) * yScale);
                float b = 0.02 / abs(p.y + sin((bx + time) * xScale) * yScale);

                float brightness = 0.5;
                gl_FragColor = vec4(r * brightness, g * brightness, b * brightness, 1.0);
              }
            `,
            uniforms: this.uniforms,
            side: THREE.DoubleSide,
          });

          const mesh = new THREE.Mesh(geometry, material);
          stage.scene.add(mesh);
        }

        update() {
          this.uniforms.time.value += 0.01;
        }
      }

      const canvas = canvasRef.current;
      const stage = new Stage(canvas);
      const wave = new WaveMesh(stage);

      const animate = () => {
        wave.update();
        stage.render();
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        stage.dispose();
        document.body.removeChild(script);
      };
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
    />
  );
};

export default WaveEffect;
