<?php
// Template Name: Sobre
?>

<?php get_header(); ?>
<section class="container sobre">
	<h2 class="subtitulo">Sobre</h2>

	<div class="grid-8">
		<img src="img/rest-fachada.jpg" alt="Fachada do Rest">
	</div>

	<div class="grid-8">
		<h2><?php the_field('titulo_sobre'); ?></h2>
		<p>O incentivo ao avanço tecnológico, assim como a mobilidade dos capitais internacionais auxilia a preparação e a composição dos níveis de motivação departamental.</p>
		<p>Gostaria de enfatizar que o desenvolvimento contínuo de distintas formas de atuação prepara-nos para enfrentar situações atípicas decorrentes do remanejamento dos quadros funcionais.</p>
		<h2>Visão</h2>
		<p>Não obstante, a expansão dos mercados mundiais faz parte de um processo de gerenciamento de alternativas às soluções ortodoxas.</p>
		<h2>Valores</h2>
		<p>O empenho em analisar a consolidação das estruturas apresenta tendências no sentido de aprovar a manutenção dos índices pretendidos.</p>
	</div>
</section>
<section class="container sobre">
	<h2 class="subtitulo">teste</h2>

	

<?php if( have_rows('repeater') ): while( have_rows('repeater') ): the_row();
		$image = get_sub_field('image');
	?>
		<div class="grid-2" style="background:red; height:100px;">
			<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" style="width:100%;" />
			<p><?php the_sub_field('texto'); ?></p>
		</div>
	<?php endwhile; ?>
<?php endif; ?>

	

	<div class="grid-2" style="background:red; height:100px;">
		teste
	</div>
</section>

<?php get_footer(); ?>