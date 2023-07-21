<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js" integrity="sha512-8RnEqURPUc5aqFEN04aQEiPlSAdE0jlFS/9iGgUyNtwFnSKCXhmB6ZTNl7LnDtDWKabJIASzXrzD0K+LYexU9g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css" integrity="sha512-uf06llspW44/LZpHzHT6qBOIVODjWtv4MxCricRxkzvopAlSWnTf6hpZTFxuuZcuNE9CBQhqE0Seu1CoRk84nQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/rubyblue.min.css" integrity="sha512-pt+OhZW7o2pmHEahNFroPWkGR89L0tmDqCzXK+7WM1vGLtUyxms1JxZsXgJbOdFwylRnEt0yHnU6y2uAs40FxQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/clike/clike.min.js" integrity="sha512-l8ZIWnQ3XHPRG3MQ8+hT1OffRSTrFwrph1j1oc1Fzc9UKVGef5XN9fdO0vm3nW0PRgQ9LJgck6ciG59m69rvfg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<style type="text/css">
	.CodeMirror{
		font-size: 15px;
		width: 100%, ;
		height: 500px;
	}
</style>

<form action="#" method="Post" style="background:#fafafa;border:solid 1px #ddd;padding:10px;box-sizing:border-box;">
	<h3><?php echo i18n_r('massiveAdmin/GSCONFIGTITLE'); ?></h3>
	<hr>
	<textarea name="content" id="myTextarea" wrap='off'><?php echo file_get_contents(GSROOTPATH . 'gsconfig.php'); ?></textarea>

	<script>
		var editor = CodeMirror.fromTextArea(document.querySelector('#myTextarea'), {
			theme: "rubyblue",
			lineNumbers: true,
			matchBrackets: true,
			indentUnit: 4,
			indentWithTabs: true,
			enterMode: "keep",
			tabMode: "shift",
			mode:'clike',
			inlineDynamicImports:true
		});
	</script>

	<input type="submit" name="editGSConfig" style="background:var(--main-color);color:#fff;padding:10px;margin-top:10px;border:none;" value="<?php echo i18n_r('massiveAdmin/GSCONFIGSAVE'); ?>">

</form>

<?php
	if (isset($_POST['editGSConfig'])) {
		global $MA;
		$MA->gsConfigEdit();
		echo '<div class="doneMassive" style="background:green;width:100%;text-align:center;padding:10px;border-radius:3px;color:#fff;">Done</div>';
		echo ("<meta http-equiv='refresh' content='1'>");
	};
; ?>