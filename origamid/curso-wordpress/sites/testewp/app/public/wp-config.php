<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_teste');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '6kaHpmmw');

/** Nome do host do MySQL */
define('DB_HOST', '200.198.182.178');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

define('WP_ALLOW_REPAIR', true);

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1uCX/MVK30Auw5M7Xbb4Jn+EhpC4wXlIMxiOlRV4TY043ELvWziUeqX1KAm1Bjgyib+ae4Iy+OBCCJ4hqZw/rQ==');
define('SECURE_AUTH_KEY',  'znicAlLG8ZXSP8hinZv74ZqSTMaxreJhy+/aEfPfrpujXyo2rji6pDQHan9HU6M9vj+kvXu8aHO2M59uXVRC2g==');
define('LOGGED_IN_KEY',    'Gjl3ySA9nJUDUdVRG93Nc8f+x3s0gJ+8rv6Lik/1tdycBLTIlnIfDyU5/n+uAimrARO+H+J9VVFROx7KFZoU4A==');
define('NONCE_KEY',        'mwJOtKTZiFKkbUdqyw66DeREfuszrd9mDf79iSHSuDZJvpPgIs8xjvZ2GX62PfH4UNbnwkeAEnmcJ9BRd+r9wg==');
define('AUTH_SALT',        'j3fQ8D/MHH6QNpk8Ubk2z29dUJj4fnNNa9vb+8Z6pvwA2NFvPHIwV4bnLls4TrzASzDP1YVT8ZZNNu//mKcFNA==');
define('SECURE_AUTH_SALT', 'qzXlB7pBpGOmIVm5L+J0tACLfLYbwMJ2a4wpeDSAt0NOFRjqzXyTK8rerud5555zor4iNBn0f/4Meiwsk1LB2A==');
define('LOGGED_IN_SALT',   'OSrvp/o5e8+P43gomYpqSmzsMH5bi0cu2gWWUpeovMt698f1evnL3jY78aYNC7k3XNkHDJpEolL6tiHmVxUxkg==');
define('NONCE_SALT',       'WwqYih07EeYCVCAxCHet6mV9dLW9x3hCKjeKs/k+UQ4ZsqGzSSSKG7kPy2DCpyL88FyXDupSKPQQfHMdfFLoaw==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';





/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if ( isset( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https' ) {
	$_SERVER['HTTPS'] = 'on';
}

/* Inserted by Local by Flywheel. Fixes $is_nginx global for rewrites. */
if ( ! empty( $_SERVER['SERVER_SOFTWARE'] ) && strpos( $_SERVER['SERVER_SOFTWARE'], 'Flywheel/' ) !== false ) {
	$_SERVER['SERVER_SOFTWARE'] = 'nginx/1.10.1';
}
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
