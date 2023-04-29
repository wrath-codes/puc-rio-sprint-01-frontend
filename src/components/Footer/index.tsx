import { Fragment } from 'react'

export default function Footer() {
    return (
        <Fragment>
            <footer className="bg-transparent text-green-500 flex flex-col justify-center items-center w-full pt-4 pb-1 fixed bottom-0">
                <div className="flex flex-col justify-center items-center gap-0.5 mb-1">
                    <p className="text-sm font-bold leading-2 text-green-500">Created by:</p>
                    <a href="https://github.com/wrath-codes" target="_blank" rel="noreferrer" className="text-sm font-semibold leading-2 text-green-500 hover:text-green-200">
                        WrathCodes
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-sm font-bold leading-2 text-green-500">Powered by:</p>
                    <ul className="flex flex-row justify-center items-center gap-2">
                        <li className="text-sm font-semibold leading-2 text-green-500">React</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">TailwindCSS</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">Vite</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">TypeScript</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">Python</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">FastAPI</li>
                        <li className="text-sm font-semibold leading-2 text-green-500">SQLite</li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}