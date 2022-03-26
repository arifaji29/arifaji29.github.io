//event pada saat link di klik
$('.page-scroll').on('click', function(e){

	//ambil isi dari tujuan
	var tujuan = $(this).attr('href');
	//ambil elemen yang bersangkutan
	var elemenTujuan = $(tujuan);
	
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	
	}, 1100, 'easeOutBounce');
	
	e.preventDefault();
	
});

elementclose = document.getElementsByClassName('overlay1');

for ( let i = 0; i < elementclose.length; i++) {
    elementclose[i].addEventListener('click', function() {
        let url = window.location.href.substr(0, window.location.href.indexOf('#'))
		window.location = url;
	});
};