<html>
<head>
		<title>Upload de imagens com PHP</title>
		<meta charset="utf-8"/>
      <link rel="stylesheet" href="./c/style.css">
</head>
<body>
<form method="post" enctype="multipart/form-data" action="recebeUpload.php">
   Selecione uma imagem: <input name="arquivo" type="file" />
   <br />
   <input type="submit" value="Salvar" />
</form>
</body>
</html>
<?php

?>