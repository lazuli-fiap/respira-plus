export default function Logo({ size = 28 }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="#5FB3B3" opacity="0.18" />
        <path
          d="M24 10c-6 4-10 10-10 16a10 10 0 0020 0c0-6-4-12-10-16z"
          fill="#5FB3B3"
        />
        <circle cx="24" cy="26" r="4" fill="#FAF9F6" />
      </svg>
      <span className="logo-text">
        Respira<span className="logo-plus">+</span>
      </span>
    </span>
  )
}
