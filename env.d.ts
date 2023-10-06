/**
 * Build-time configuration options
 */
interface ImportMetaEnv {
  /** package.json name */
  PACKAGE_NAME: string
  /** package.json version */
  PACKAGE_VERSION: string
  /** package.json description */
  PACKAGE_DESCRIPTION: string
  /** package.json keywords */
  PACKAGE_KEYWORDS: string[]
  /** package.json license */
  PACKAGE_LICENSE: string
  /** package.json author */
  PACKAGE_AUTHOR: string

  /** Example message */
  VITE_APP_EXAMPLE: string
}
