export default function FloatingElements() {
  return (
    <div aria-hidden className="floating-wrap pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="float-orb orb-a" />
      <span className="float-orb orb-b" />
      <span className="float-orb orb-c" />
    </div>
  );
}
