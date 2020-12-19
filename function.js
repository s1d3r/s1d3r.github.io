var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function() {
    iziToast.show({
        title: 'Success :',
        message: 'copied to clipboard',
        class: 'toast',
        theme: 'dark',
        position: 'topRight'
    });
});

$('.audio').prop('volume', 0.1);


