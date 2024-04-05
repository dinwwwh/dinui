export default function Footer() {
  return (
    <div className="container px-0 ml-0 py-2">
      <p className="text-balance text-sm leading-loose text-gray-600 md:text-left">
        Built by{' '}
        <a
          href="https://x.com/dinsterizer"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          Din
        </a>
        . Released under the MIT License, the source code is available on{' '}
        <a
          href="https://github.com/dinsterizer/dinui"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  )
}
