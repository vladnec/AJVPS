<?php

			$mailT = '<span style="display:block; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color:#000000; padding-bottom: 15px;">Acest mail a fost intocmit in urma completarii formularului de contact de pe site-ul ajvpsbotosani.ro, de catre '.$_POST['nume'].', la ora '.date("h:i").', '.date("d.m.Y").'.</span>';
			$mailT .= '<span style="display:block; font-family: Arial, Helvetica, sans-serif; font-size: 11px; color:#333333; padding-bottom: 5px;">Urmeaza datele utilizator:</span> ';
			$mailT .= '
				<ul style="display: block;width: 450px;margin: 0px;padding-top: 5px;padding-bottom: 15px; padding-left: 15px;list-style-type: disc;list-style-position: outside;">	
					<li><strong>Nume</strong> : '.$_POST['name'].'</li>
					<li><strong>Telefon</strong> : '.$_POST['phone'].'</li>
					<li><strong>Email</strong> : '.$_POST['email'].'</li>
					<li><strong>Mesaj</strong> : '.$_POST['message'].'</li>
				</ul>			
			';
			$mailT .= '<span style="display:block; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color:#333333; padding-bottom: 5px;">Utilizatorul asteapta sa fie contactat in maxim 48 de ore din momentul in care a fost generat acest mesaj.</span> ';
			
			//productie@lightmedia.ro
			$adresses = "ajvps_botosani@yahoo.com";

			$headers  = "MIME-Version: 1.0\n"; 
			$headers .= "Content-type: text/html; charset=iso-8859-1\n"; 
			$headers .= "from: contactFormScript@ajvpsbotosani.ro\n"; 
			$headers .= "To: <AJVPS Botosani>\n";
			if(mail($adresses,"AJVPS Botosani", $mailT, $headers) ){
				echo 'Mesajul dumneavoastra a fost trimis.';
			}
			else{
				echo '<br />Eroare!! Mesajul dumneavoastra nu a putut fi transmis.<br /><br />Va rugam sa incerca-ti din nou in cateva minute.<br /><br />Va multumim pentru intelegere.';
			}
?>