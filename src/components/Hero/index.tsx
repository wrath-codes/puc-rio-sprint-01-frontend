import { Fragment } from "react";
import Subtitle from "./Subtitle";
import Title from "./Title";


export default function Hero() {
    return (
        <Fragment>
            <div className="px-6 py-24 sm:py-5 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <Title />
                    <Subtitle />
                </div>
            </div>
        </Fragment>
    )
}