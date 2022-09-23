document.body.onload = () => {
    const $container = document.querySelector('.container') // we call the real element
    $container.style.setProperty('--display', 'none') // use setProperty method to call the CCS variable

    setTimeout(() => {
        const $container = document.querySelector('.container')
        $container.style.setProperty('--display', 'block')
    }, 5000)

    document.forms['subscriptionForm']['username'].value = ''
}


const $submitBtn = document.querySelector('.submitBtn')
$submitBtn.onclick = (e) => {
    e.preventDefault()
}

