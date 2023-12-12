import Link from 'next/link'

const BTN = ({url, anchor}) => {
    return(
        <Link
            href={url}
        >
            <a className="btn">
                <span>{anchor}</span>
            </a>
        </Link>
    )
}

export default BTN