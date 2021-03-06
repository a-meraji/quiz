import React from 'react'

export default function Loading() {
  return (
    <div className='fixed top-0 h-full left-0 w-full bg-[#000000ea]'>
      <div className="loader">Loading...</div>
      <style jsx>
        {`
          .loader {
            margin: 50vh auto;
            font-size: 25px;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            position: relative;
            text-indent: -9999em;
            -webkit-animation: load5 1.1s infinite ease;
            animation: load5 1.1s infinite ease;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
          }
          @-webkit-keyframes load5 {
            0%,
            100% {
              box-shadow: 0em -2.6em 0em 0em #fce94f,
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.5),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.7);
            }
            12.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.7),
                1.8em -1.8em 0 0em #fce94f,
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.5);
            }
            25% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.5),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.7),
                2.5em 0em 0 0em #fce94f,
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            37.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.5),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.7),
                1.75em 1.75em 0 0em #fce94f,
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            50% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.5),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.7),
                0em 2.5em 0 0em #fce94f,
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            62.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.5),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.7),
                -1.8em 1.8em 0 0em #fce94f,
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            75% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.5),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.7),
                -2.6em 0em 0 0em #fce94f,
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            87.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.5),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.7),
                -1.8em -1.8em 0 0em #fce94f;
            }
          }
          @keyframes load5 {
            0%,
            100% {
              box-shadow: 0em -2.6em 0em 0em #fce94f,
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.5),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.7);
            }
            12.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.7),
                1.8em -1.8em 0 0em #fce94f,
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.5);
            }
            25% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.5),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.7),
                2.5em 0em 0 0em #fce94f,
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            37.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.5),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.7),
                1.75em 1.75em 0 0em #fce94f,
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            50% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.5),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.7),
                0em 2.5em 0 0em #fce94f,
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.2),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            62.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.5),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.7),
                -1.8em 1.8em 0 0em #fce94f,
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            75% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.5),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.7),
                -2.6em 0em 0 0em #fce94f,
                -1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2);
            }
            87.5% {
              box-shadow: 0em -2.6em 0em 0em rgba(252, 233, 79, 0.2),
                1.8em -1.8em 0 0em rgba(252, 233, 79, 0.2),
                2.5em 0em 0 0em rgba(252, 233, 79, 0.2),
                1.75em 1.75em 0 0em rgba(252, 233, 79, 0.2),
                0em 2.5em 0 0em rgba(252, 233, 79, 0.2),
                -1.8em 1.8em 0 0em rgba(252, 233, 79, 0.5),
                -2.6em 0em 0 0em rgba(252, 233, 79, 0.7),
                -1.8em -1.8em 0 0em #fce94f;
            }
          }
        `}
      </style>
    </div>
  )
}
