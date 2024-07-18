<template>
       <a href="https://wa.link/u7zh5m" target="_blank" rel="noopener noreferrer">
                <div class="card-wa">
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000"
                            viewBox="0 0 256 256">
                            <path
                                d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z">
                            </path>
                        </svg>
                    </div>
                    <strong> Whatsapp</strong>
                    <div class="card__body">Ayo Order Sekarang Juga!</div>
                    <span>Click Disini</span>
                </div>
            </a>
</template>
<style scoped>
a{
    text-decoration: none;
    color: white;
}
.card-wa{
    margin: 20px;
    --bg: #6a9c50;
    --hover-bg: #5ac947ed;
    --hover-text: #047004;
    max-width: 23ch;
    text-align: center;
    background: var(--bg);
    padding: 1.5em;
    padding-block: 1.8em;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1), transform 0.15s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
}
.card__body {
    color: #ffffff;
    line-height: 1.5em;
    font-size: 1em;
}
.card-wa> :not(span) {
    transition: 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card-wa>strong {
    display: block;
    font-size: 1.4rem;
    letter-spacing: -0.035em;
}

.card-wa span {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--hover-text);
    border-radius: 5px;
    font-weight: bold;
    top: 100%;
    transition: all 0.3s cubic-bezier(0.6, 0.4, 0, 1);
}

.card-wa:hover span {
    top: 0;
    font-size: 1.2em;
}

.card-wa:hover {
    background: var(--hover-bg);
}

.card-wa:hover>div,
.card-wa:hover>strong {
    opacity: 0;
}
</style>