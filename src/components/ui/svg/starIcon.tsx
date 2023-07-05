import { forwardRef, memo, Ref, SVGProps } from 'react'

const StarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" ref={ref} {...props}>
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M10.97 2.7a1.2 1.2 0 0 1 2.06 0l2.33 3.88c.17.28.44.48.76.55l4.4 1.02a1.2 1.2 0 0 1 .63 1.96l-2.96 3.41a1.2 1.2 0 0 0-.29.89l.4 4.5a1.2 1.2 0 0 1-1.67 1.21l-4.16-1.76a1.2 1.2 0 0 0-.94 0l-4.16 1.76a1.2 1.2 0 0 1-1.66-1.2l.39-4.51a1.2 1.2 0 0 0-.3-.89l-2.95-3.41a1.2 1.2 0 0 1 .63-1.96l4.4-1.02c.32-.07.6-.27.76-.55l2.33-3.87Z"
    />
  </svg>
)
const ForwardRef = forwardRef(StarIcon)
const Memo = memo(ForwardRef)

export { Memo as StarIcon }
