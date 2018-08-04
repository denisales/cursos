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
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pC2fO5+yW7upF5VT0jkH+/86fQDcLvCVOTmimDVZ1SYQNj0MeNe8z9Y6Pj62ZluXNeka0G+1jHZmAUWoOWaXMw==');
define('SECURE_AUTH_KEY',  'MhsE9Z08qNjDyIYEwCGYG/DjaEJKyA7YLi/9i4lwL0okgCSenBoEtcnsSu/dyFqCimiu29x9QVLChOqTaIVzgQ==');
define('LOGGED_IN_KEY',    '6rdxifw96oNVGsTDbaSANer0etiJeiSAbtBuxrNIUNbBjG8biokdvqNYJ6QQRTuqRtq2W+AUGrxtjKZ1WDwg1Q==');
define('NONCE_KEY',        '1uNHNv0M2ynVe2h38Raj7ju06Me8rCgONLWxJ190P5SSSs5gOLAjxuEBkC1E3pjYpr4/1TpMhnbvBa+VhhQ3Eg==');
define('AUTH_SALT',        '9ratyNiVlxRheKkHQw9P2/L6RTAAbRt1FrtzzfCMQ3d7Nip9I2mZlR+W5sN67PPlrNVl2fxgtLVVE8HDjaKKqA==');
define('SECURE_AUTH_SALT', 's9CMMzvBggrOpZOHlo6vRX/EKg5yrXcEXYm0H3QVqcsK0XSe+ukCOwYEP8D8qNwUV6KClJCyU0QHwzz4u6LC2w==');
define('LOGGED_IN_SALT',   'jN6d5Z8/IDBCaOXCSjZqNPlNGmsvp78uPqIBGP6ET+ZTSzIb0M9wgqodyOtj7VI47bLCqeaNWbG0wmHsAqj23w==');
define('NONCE_SALT',       '+Yf5pjIDtPN68X3a48rLATeKvE31rwlDvBnmgBgbL3LTy43YT1PBfHmtXnDP95Rtxfj9pPEw2lOJQ9RHFtY7Vw==');

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
