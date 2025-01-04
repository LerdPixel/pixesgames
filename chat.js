var lastId = 0

$(document).ready(function() {

    publish.onsubmit = function(event) {
        event.preventDefault()
        if((this.elements.message.value == '') || (this.elements.message.value.length > 200)) {
            return false
        }
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "/publish?text=" + this.elements.message.value, true)
        xhr.send('')
        this.elements.message.value = ''
        return false;
    }

    subscribe()

    function subscribe() {
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "/subscribe?lastId="+lastId, true)
        xhr.onload = function () {
            var newMessages = JSON.parse(this.responseText)
            newMessages.map(function (message) {
                var li = document.createElement('li')
                li.textContent = message.text
                messages.append(li)
                $(li).addClass("mess")
                lastId = message.id
            })
            setTimeout(subscribe, 500)
        }

        xhr.onerror = xhr.onabort = function () {
            setTimeout(subscribe, 500)
        }
        xhr.send('')
    }
})
