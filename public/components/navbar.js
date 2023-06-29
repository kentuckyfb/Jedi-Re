class Navbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
        `
        <style>
            .larger-screen-nav-wrapper .navbar{
                background: none;
                position: fixed;
                width: 72%;
                border-bottom: 2px solid black;
                z-index: 1000;
                font-family: 'freigeist-medium';
                text-transform: uppercase;
                font-size: 14px;
                backdrop-filter: blur(20px);
            }
            .larger-screen-nav-wrapper ul li a{
                text-decoration: none;
                color: black;
                margin-bottom: 10px;
            }
            .larger-screen-nav-wrapper #menu-text{
                color: black;
                position: absolute;
                bottom: 0;
                transform: translateX(-50%);
                left: 50%;
                top: 20px;
            }
        </style>
        
        <div class="larger-screen-nav-wrapper">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <!-- left secetion -->
                            <li class="nav-item"><a class="nav-link" href="#">Women</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Men</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Collection</a></li>
                        </ul>

                        <p id="menu-text">menu</p>

                        <!-- right secetion -->
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#">Search</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Account</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Cart</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        `;
    }
}

// registering the custom element
customElements.define('navbar-component', Navbar)