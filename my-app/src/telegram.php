<?php
/*https://api.telegram.org/bot1163166859:AAF5Qrf_wr9YgBiNuPzEar2k1lUlxldcT2Y/getUpdates
$token = "1163166859:AAF5Qrf_wr9YgBiNuPzEar2k1lUlxldcT2Y";
$chat_id = "-322039872"; 


*/

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1163166859:AAF5Qrf_wr9YgBiNuPzEar2k1lUlxldcT2Y";
$chat_id = "-322039872";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  header('Location: /thankspage');
} else {
  echo "Error";
}


?>