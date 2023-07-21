<style>
	@import url('<?php global $SITEURL;
					echo $SITEURL; ?>plugins/massiveAdmin/css/newOptionsMassive.css');
</style>




<div class="rename-fog hide-fog">
	<div class="form-rename">
		<form class="form-form-rename" action="#" method="post">

			<input type="text" name="rename-massive-hide" style="display:none">

			<input type="text" name="rename-massive">
			<input type="submit" name="save-rename-massive" class="submit" value="<?php echo i18n_r("massiveAdmin/RENAMEFILE"); ?>">
			<input type="submit" name="copy-rename-massive" class="submit" value="<?php echo i18n_r("massiveAdmin/COPYFILE"); ?>">
			<button class="close-rename-fog"><i class="uil uil-times"></i></button>
		</form>
	</div>
</div>

 


<script src="<?php echo $SITEURL; ?>plugins/massiveAdmin/js/newOptionsMassive.js?v=2"></script>




<?php

if (isset($_POST['deleteFileList'])) {
	global $MA;
	$MA->deleteFileList();
};

if (isset($_POST['save-rename-massive'])) {
	global $MA;

	$MA->saveRename();
}

if (isset($_POST['copy-rename-massive'])) {
	global $MA;

	$MA->copyRename();
};

?>