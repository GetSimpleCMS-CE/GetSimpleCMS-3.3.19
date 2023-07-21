const menuli = document.querySelectorAll('#sidebar .snav li a');

menuli.forEach(ml => {
	ml.insertAdjacentHTML('afterbegin', '<i class="uil uil-arrow-circle-right"></i>');
});

document.querySelector('#nav_pages .pages').insertAdjacentHTML('afterbegin', '<i class="uil uil-desktop"></i>');
document.querySelector('#nav_upload .files').insertAdjacentHTML('afterbegin', '<i class="uil uil-file"></i>');
document.querySelector('#nav_theme .theme').insertAdjacentHTML('afterbegin', '<i class="uil uil-paint-tool"></i>');
document.querySelector('#nav_backups .backups').insertAdjacentHTML('afterbegin', '<i class="uil uil-save"></i>');
document.querySelector('#nav_plugins .plugins').insertAdjacentHTML('afterbegin', '<i class="uil uil-plug"></i>');

document.querySelector("#header #pill .rightnav a").innerHTML = '<i class="uil uil-user"></i>';
document.querySelector("#header #pill .leftnav a").innerHTML = '<i class="uil uil-power"></i>';

document.querySelector('.header .nav .rightnav .settings').innerHTML = '<i class="uil uil-setting"></i>';
document.querySelector('.header .nav .rightnav .support').innerHTML = '<i class="uil uil-life-ring"></i>';

const toper = document.createElement('div');
toper.classList.add('toper');
document.querySelector('#header').prepend(toper);

toper.insertAdjacentHTML('afterbegin', '<div class="wrapper"></div>');

const pill = document.querySelector('#header #pill');

toper.querySelector('.wrapper').prepend(pill);

const rightNav = document.querySelectorAll('.header .nav .rightnav')[0];
const rightNav2 = document.querySelectorAll('.header .nav .rightnav')[1];
toper.querySelector('.wrapper #pill').prepend(rightNav);
toper.querySelector('.wrapper #pill').prepend(rightNav2);
document.querySelectorAll('.imgthumb').forEach(it => { it.style.display = "block" })

const imgLink = document.querySelectorAll('.imgthumb a').forEach(it => {
	const linkit = it.getAttribute('href');
	it.querySelector('img').setAttribute('src', linkit);
});

/// add url section to tr on editpages

if (document.querySelector('#pages') !== null) {
	document.querySelector(' #editpages tr:nth-child(1) th:nth-child(1)').insertAdjacentHTML('afterend', '<th>URL</th>');

	document.querySelectorAll('#editpages .secondarylink a').forEach(sl => {
		sl.innerHTML = '<i class="uil uil-search"></i>';
	});

	document.querySelectorAll('#editpages tr').forEach(tr => {
		if (tr.querySelector('.pagetitle') !== null) {
			const pagetitle = tr.querySelector('.pagetitle');
			const secondarylink = tr.querySelector('.secondarylink a').getAttribute('href');
			pagetitle.insertAdjacentHTML('afterend', '<td class="linker">' + secondarylink + '</td>');
		}
	});
}

// 'Adds collapse/expand-functionality to page-list script by andy-man / plugin created by Carlos / added animation (good color for light-theme) by multicolor ',

$('#editpages tr').attr('rel', 0).addClass('l-0');
$('.pagetitle span').not('.showstatus').each(function (i, e) {
	$tr = $(this).parent().parent();
	var level = $tr.find('.pagetitle span').not('.showstatus').size();
	$tr.attr('rel', level);
	$tr.attr('class', 'hidden l-' + level);
});

$('#editpages tr.hidden').each(function (i, e) {
	if (parseInt($(this).prev().attr('rel')) < parseInt($(this).attr('rel'))) $(this).prev().find('.pagetitle').prepend('<div class="switch"></div>');
});

$('.pagetitle').on('click', '.switch', function () {

	$tr = $(this).parent().parent();
	var lvl = parseInt($tr.attr('rel'));

	if ($(this).hasClass('on'))
		$tr.nextUntil('.l-' + lvl).addClass('hidden').find('.switch.on').removeClass('on');
	else
		$tr.nextUntil('.l-' + lvl, '.l-' + (lvl + 1)).removeClass('hidden').addClass('fadeIn');

	$(this).toggleClass('on');
});

document.querySelectorAll('.switch').forEach(sx => {
	sx.insertAdjacentHTML('afterbegin', '<i class="uil uil-plus"></i>');
});

document.querySelector('#header .nav').insertAdjacentHTML('beforebegin', '<button class="rwd">MENU<i  class="uil uil-bars"></i></button>');

document.querySelector('.rwd').addEventListener('click', () => {

	if (document.querySelector('#header .nav').style.display == "flex") {
		document.querySelector('#header .nav').style.display = "none";
	} else {
		document.querySelector('#header .nav').style.display = "flex";

	}

});

if (document.querySelector('#edit .edit-nav') !== null) {
	document.querySelector('#edit .edit-nav a:nth-child(1)').insertAdjacentHTML('beforeend', '<i class="uil uil-search"></i>');
}

if (document.querySelector('#header #nav_i18n_gallery') !== null) {
	document.querySelector('#header #nav_i18n_gallery a').insertAdjacentHTML('afterbegin', '<i class="uil uil-images"></i>');
};

// add uploader on screen

let hrefUrl = location.href;
if (hrefUrl.indexOf('?id=news_manager&') >= 0) {
	console.log('dziala')
	document.querySelector('.masive-uploader').style.display = "block";
	document.querySelector('.compmassive').style.display = "none";
}

if (hrefUrl.indexOf('i18n_gallery&create') >= 0) {
  console.log('dziala')
  document.querySelector('.masive-uploader').style.display = "block";
  
}

if (hrefUrl.indexOf('i18n_gallery&edit') >= 0) {
  console.log('dziala')
  document.querySelector('.masive-uploader').style.display = "block";

}

// upload support webp, svg

document.querySelectorAll('.imgthumb').forEach((x,i)=>{
	if(x.innerHTML=='' && document.querySelectorAll('.primarylink')[i].getAttribute('href').indexOf('.svg') >= 0 ){

		x.innerHTML = `<div class="massive-folder-linker"><i class="uil uil-file" style="  font-size: 4rem;
  display: block;
  margin-bottom: 15px;"></i></div>`;
	}
});

if (document.querySelector('#imageTable') !== null) {
	console.log('upload screen');
	document.querySelectorAll('#imageTable tr').forEach(x => {
		const thumb = x.querySelector('.imgthumb');

		if (x.querySelector('.primarylink img') !== null) {
	 
			if (x.querySelector('.primarylink img').getAttribute('src').indexOf('.webp') >= 0) {
				 thumb.innerHTML = `<a href="${x.querySelector('.primarylink img').getAttribute('src')}"
				  rel=" facybox_i"><img src="${x.querySelector('.primarylink img').getAttribute('src')}"></a>`;
			}



			if (x.querySelector('.primarylink').getAttribute('href').indexOf('.svg') >= 0) {
				thumb.innerHTML = `<a href="${x.querySelector('.primarylink').getAttribute('href')}" rel=" facybox_i">
				<img src="${x.querySelector('.primarylink').getAttribute('href')}"></a>`;
		   }
		}
	})
}

//

if (document.querySelector('body#edit') !== null) {

	const upcke = document.createElement('div');
	upcke.classList.add('upcke');
	upcke.style.width="100%";
	upcke.style.height='auto'; 
	upcke.style.background="var(--main-color)";
	upcke.style.marginBottom = "20px";
	upcke.style.borderRadius ="5px";
	upcke.style.padding = "10px";
	upcke.style.alignItems = 'center';
	upcke.style.display="grid";
	upcke.style.gridTemplateColumns = "repeat(12,1fr)";
	upcke.style.gridGap = "4px";
	
	const media = window.matchMedia("(max-width:960px)");
	
	if(media.matches){
	  upcke.style.gridTemplateColumns = "repeat(6,1fr)";
	}
	
	const col12 = document.createElement('button');
	col12.classList.add('col12-btn');  
	col12.innerHTML = '<img src="../plugins/massiveAdmin/img/col12.png" style="width:30px">';  
	
	const col66 = document.createElement('button');
	col66.classList.add('col66-btn');  
	col66.innerHTML = '<img src="../plugins/massiveAdmin/img/col66.png" style="width:30px">';  
	
	const col84 = document.createElement('button');
	col84.classList.add('col84-btn');  
	col84.innerHTML = '<img src="../plugins/massiveAdmin/img/col84.png" style="width:30px">';  
	
	const col48 = document.createElement('button');
	col48.classList.add('col48-btn');  
	col48.innerHTML = '<img src="../plugins/massiveAdmin/img/col48.png" style="width:30px">';
	
	const col3333 = document.createElement('button');
	col3333.classList.add('col3333-btn');  
	col3333.innerHTML = '<img src="../plugins/massiveAdmin/img/col3333.png" style="width:30px">';  
	
	const col444 = document.createElement('button');
	col444.classList.add('col444-btn');  
	col444.innerHTML = '<img src="../plugins/massiveAdmin/img/col444.png" style="width:30px">';  
	
	const col12wi = document.createElement('button');
	col12wi.classList.add('col12-btn');  
	col12wi.innerHTML ='<img src="../plugins/massiveAdmin/img/col12wi.png" style="width:30px">';
	
	const col66wi = document.createElement('button');
	col66wi.classList.add('col66-btn');  
	col66wi.innerHTML ='<img src="../plugins/massiveAdmin/img/col66wi.png" style="width:30px">';
	
	const col84wi = document.createElement('button');
	col84wi.classList.add('col84-btn');  
	col84wi.innerHTML = '<img src="../plugins/massiveAdmin/img/col84wi.png" style="width:30px">';
	
	const col48wi = document.createElement('button');
	col48wi.classList.add('col48-btn');  
	col48wi.innerHTML = '<img src="../plugins/massiveAdmin/img/col48wi.png" style="width:30px">';
	
	const col3333wi = document.createElement('button');
	col3333wi.classList.add('col3333-btn');  
	col3333wi.innerHTML = '<img src="../plugins/massiveAdmin/img/col3333wi.png" style="width:30px">'; 
	
	const col444wi = document.createElement('button');
	col444wi.classList.add('col444-btn');  
	col444wi.innerHTML = '<img src="../plugins/massiveAdmin/img/col444wi.png" style="width:30px">';  
	
	const titleAlign = document.createElement('div');
	titleAlign.innerHTML="Column with image and align center";
	titleAlign.style.gridColumn ="1/7";
	titleAlign.style.color="#fff";
	titleAlign.style.fontSize = "15px";
	titleAlign.style.marginTop="5px";
	titleAlign.style.marginBottom = "5px";
	
	upcke.insertAdjacentElement('beforeend',col12);
	upcke.insertAdjacentElement('beforeend',col66);
	upcke.insertAdjacentElement('beforeend',col84);
	upcke.insertAdjacentElement('beforeend',col48);
	upcke.insertAdjacentElement('beforeend',col3333);
	upcke.insertAdjacentElement('beforeend',col444);
	
	upcke.insertAdjacentElement('beforeend',col12wi);
	upcke.insertAdjacentElement('beforeend',col66wi);
	upcke.insertAdjacentElement('beforeend',col84wi);
	upcke.insertAdjacentElement('beforeend',col48wi);
	upcke.insertAdjacentElement('beforeend',col3333wi);
	upcke.insertAdjacentElement('beforeend',col444wi);
	
	document.querySelector('#post-content').insertAdjacentElement('beforebegin',upcke);
	
	col12.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-12"><p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.</p></div></div>&nbsp;');
	});
	
	col66.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-6"><p>lorem ipsum</p></div><div class="col-md-6"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	col84.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-8"><p>lorem ipsum</p></div><div class="col-md-4"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	col48.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-4"><p>lorem ipsum</p></div><div class="col-md-8"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	col3333.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-3"><p>lorem ipsum</p></div><div class="col-md-3"><p>lorem ipsum</p></div> <div class="col-md-3"><p>lorem ipsum</p></div> <div class="col-md-3"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	col444.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-4"><p>lorem ipsum</p></div><div class="col-md-4"><p>lorem ipsum</p></div> <div class="col-md-4"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	
	//with image
	
	col12wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row"><div class="col-md-12"><img src="https://picsum.photos/200/300" style="width:100%"></div></div>&nbsp;');
	});
	
	col66wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row align-items-center"><div class="col-md-6"><p>lorem ipsum</p></div><div class="col-md-6"><img src="https://picsum.photos/200/300" style="width:100%"></div></div>&nbsp;');
	});
	
	col84wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row align-items-center"><div class="col-md-8"><p>lorem ipsum</p></div><div class="col-md-4"><img src="https://picsum.photos/200/300" style="width:100%"></div></div>&nbsp;');
	});
	
	col48wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row align-items-center"><div class="col-md-4"><img src="https://picsum.photos/200/300" style="width:100%"></div><div class="col-md-8"><p>lorem ipsum</p></div></div>&nbsp;');
	});
	
	col3333wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row align-items-center"><div class="col-md-3"><p>lorem ipsum</p></div><div class="col-md-3"><img src="https://picsum.photos/200/300" style="width:100%"></div> <div class="col-md-3"><p>lorem ipsum</p></div> <div class="col-md-3"><img src="https://picsum.photos/200/300" style="width:100%"></div></div>&nbsp;');
	});
	
	col444wi.addEventListener('click',(e)=>{
		e.preventDefault();
		CKEDITOR.instances['post-content'].insertHtml('<div class="row align-items-center"><div class="col-md-4"><img src="https://picsum.photos/200/300" style="width:100%"></div><div class="col-md-4"><img src="https://picsum.photos/200/300" style="width:100%"></div> <div class="col-md-4"><img src="https://picsum.photos/200/300" style="width:100%"></div></div>&nbsp;');
	});
	
};