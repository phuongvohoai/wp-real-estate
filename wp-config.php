<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

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

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
/*define('DB_NAME', 'justfpb2_phuongvo');*/
define('DB_NAME', 'real_estate');

/** MySQL database username */
/*define('DB_USER', 'justfpb2_kevin');*/
define('DB_USER', 'root');

/** MySQL database password */
/*define('DB_PASSWORD', 'kaya123!@#');*/
define('DB_PASSWORD', '');

/** MySQL hostname */
/*define('DB_HOST', '50.87.249.61');*/
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[M!7 iiX%I<j{Sab_6|8pqPGFWZXFyecx*6(V`n2{Byn_gv5<~:IR5c%r^$(4aI@');
define('SECURE_AUTH_KEY',  '.j/ES@^?wvK=mo/^LCFwy|Je}stI2}vyH6o);Wh 7<[$D1UJ4xHTIz7T*q[PmR`W');
define('LOGGED_IN_KEY',    '+8|]EcA[VH;J9mrGZ~8ry9;~)uv,j~L/7~+<ie]@y!hl+]Cg]Mw%Fq=(4-LzFv{V');
define('NONCE_KEY',        'pa+uFSV~kb}T*@nJe1~^)n3wKB)!CTevo`+1%o*-zF,utV{)dlpO7yXW{@-ogzI+');
define('AUTH_SALT',        'zg?<w9|gHd/+s&@cBcH^-dB};#;h8PDkQ62iruRS7>UYQJoeuQ`O9a6PQqNsF%RR');
define('SECURE_AUTH_SALT', ';w$ ycw)%S,=`*,l_[WCuKYUW!X+3c=Pe&o{LL,*y%,uA?t2@8})cwkaROtd]i-L');
define('LOGGED_IN_SALT',   'vh<`A)Eu:mQoZ0:mDH[<6y)IY=s+O0Mn:@y{J3&EHAy74(,/]vV3+dW5?iGEXue0');
define('NONCE_SALT',       'hlyWKt,ULBkg#d6^BF#!>BBfw]1tKgO5V6E5E>}L$Se<2o(7M56NW,BJd4 Lt,gE');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
