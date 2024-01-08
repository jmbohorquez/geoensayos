import Link from 'next/link'

const BTN = ({url, anchor}) => {
    return(
        <Link
            href={url}
            className="btn btn-primary btn-animate"
        >
            {anchor}
        </Link>
    )
}

export default BTN