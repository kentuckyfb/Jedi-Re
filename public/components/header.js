class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <style>
            #header{
                position: relative;
            }
            #header h1{
                text-transform: uppercase;
                position: absolute;
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                color: white !important;
                font-family: freigeist-light;
                font-size: 4vw;
                width: 100%;
                // background: red;
                text-align: center; 
            }
            #rectangle{
                position: absolute;
                transform: translate(-50%, -50%);
                left: 43%;
                top: 25%;
                height: 350px;
                width: 150px;
                transform: rotate(45deg);
                background: none;
                border: 2px solid white;
                border-radius: 50%;
                animation: rectangleAnimator 10s infinite linear; 
            }
            @keyframes rectangleAnimator {
                0%, 100%{
                    transform: rotate(45deg);
                }
                50%{
                    transform: rotate(35deg);
                }
            }
            
            #page-wrap {
                width: 100%;
                height: auto;
                overflow: hidden;
                // opacity: 0.9;
            }
            #canvas {
                height: 100vh;
                width: 100vw;
                opacity: 0;
                transition: opacity 0.5s ease-in;
            }
            .video-started #canvas {
                opacity: 1;
            }
            .curtain-wrapper {
                position: absolute;
                z-index: 15;
                top: 10%;
                right: 0%;
                bottom: 10%;
                left: 0%;
            }
            .curtain {
                position: absolute;
                top: 0;
                right: 2% !important;
                bottom: 0;
                left: 2% !important;
            }
            .curtain img, .curtain video {
                opacity: 0;
            }
            .no-curtains .curtain-wrapper {
                left: 50%;
                right: auto;
                bottom: auto;
                top: 50%;
                transform: translate(-50%, -50%);
            }
            
            .no-curtains .curtain {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .no-curtains.video-started .curtain img, .no-curtains.video-started .curtain video {
                display: block;
                object-fit: cover;
            }
            
            /*** handling video ratio on error ***/
            @media screen and (max-aspect-ratio: 1920/1080) {
                .no-curtains .curtain-wrapper {
                    height: calc(100vh * 0.8);
                    width: calc(177vh * 0.8);
                }
            }
                @media screen and (min-aspect-ratio: 1920/1080) {
                .no-curtains .curtain-wrapper {
                    width: calc(100vw * 0.8);
                    height: calc(56.25vw * 0.8);
                }
            }
        </style>
        
        <h1>kameeliya clothing ✹ 22</h1>
        <div id="rectangle"></div>

        <div id="page-wrap">
            <div id="canvas"></div>
            <div class="curtain-wrapper">
                <div class="curtain">
                    <!-- https://www.youtube.com/watch?v=AZngcdzGnNg -->
                    <video class="w-100" src="assets/vid/Background.mp4" crossorigin="" data-sampler="simplePlaneVideoTexture"></video>
                </div>
            </div>
        </div>
        `
    }
}


// registering the custom element
customElements.define('header-component', Header)