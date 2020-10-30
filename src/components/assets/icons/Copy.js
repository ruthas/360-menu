import * as React from "react"

function SvgCopy(props) {
  return (
    <svg fill="none" height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path
        clipRule="evenodd"
        d="M10 2h10c1.152 0 2 .848 2 2v10c0 1.152-.848 2-2 2h-4v4c0 1.152-.848 2-2 2H4c-1.152 0-2-.848-2-2V10c0-1.152.848-2 2-2h4V4c0-1.152.848-2 2-2zm-2 8H4v10h10v-4h-4c-1.152 0-2-.848-2-2zm2-6v10h10V4z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCopy
