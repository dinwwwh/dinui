export default function Footer() {
  return (
    <div className="container px-0 ml-0">
      <p className="text-balance text-sm leading-loose text-gray-600 md:text-left">
        Built by{' '}
        <a
          href="https://x.com/dinwwwh"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          dinwwwh
        </a>
        . The source code is available on{' '}
        <a
          href="https://github.com/dinwwwh/dinui"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </a>
        , and released under the MIT License.
      </p>
    </div>
  )
}
