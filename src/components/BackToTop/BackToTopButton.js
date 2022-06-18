import React from 'react';
import Link from 'next/link';
import {useEffect,  useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@material-ui/core';
import { ButtonTop } from './BackToTopButtonStyles';

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="">

        {backToTopButton && (
            <Tooltip title={<h1>Back to top</h1>} placement="left">
                <ButtonTop onClick = {scrollUp}>
                    <Link href="/">
                        <div>
                            <FontAwesomeIcon icon={faChevronUp} color='#FFF' size="5x" />
                        </div>
                    </Link>
                </ButtonTop>
            </Tooltip>
        )}
    </div>
}

export default BackToTopButton;