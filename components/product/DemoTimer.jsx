export default function DemoTimer({ label = '30 minutes chrono, sans engagement' }) {
  return (
    <span className="demo-timer">
      <span className="demo-timer-dot" />
      {label}
    </span>
  );
}
