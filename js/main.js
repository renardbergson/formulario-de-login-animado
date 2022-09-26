document.body.onload = () => {
    const $container = document.querySelector('.container') // we call the real element
    $container.style.setProperty('--display', 'none') // use setProperty method to call the CCS variable

    setTimeout(() => {
        $container.style.setProperty('--display', 'block')
        $container.style.setProperty('--animation', 'animatedBorder 10000ms linear infinite, borderOpacity 2000ms') 
    }, 5000)

    document.forms['subscriptionForm']['username'].value = ''
}


const $submitBtn = document.querySelector('.submitBtn')
$submitBtn.onclick = (e) => {
    e.preventDefault()

    window.open('https://github.com/renardbergson')
}