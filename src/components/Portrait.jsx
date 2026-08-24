export default function Portrait({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-square overflow-hidden rounded-full bg-mist shadow-[0_0_0_1px_rgba(243,238,230,0.12)]">
        <img
          src="/images/sinfnd-prof-yo.png"
          alt="Tomás Averbuj"
          className="h-full w-full object-cover object-[center_20%]"
        />
      </div>
    </div>
  );
}
