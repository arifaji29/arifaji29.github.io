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