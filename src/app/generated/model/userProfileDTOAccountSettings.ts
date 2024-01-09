/**
 * tkit-portal-server API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.4.0-SNAPSHOT
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountSettingsDTO } from './accountSettingsDTO'
import { AccountSettingsDTOLocaleAndTimeSettings } from './accountSettingsDTOLocaleAndTimeSettings'
import { AccountSettingsDTOPrivacySettings } from './accountSettingsDTOPrivacySettings'
import { AccountSettingsDTOLayoutAndThemeSettings } from './accountSettingsDTOLayoutAndThemeSettings'
import { PreferencesDTO } from './preferencesDTO'

export interface UserProfileDTOAccountSettings {
  version?: number
  creationDate?: string
  creationUser?: string
  modificationDate?: string
  modificationUser?: string
  id?: string
  privacySettings?: AccountSettingsDTOPrivacySettings
  localeAndTimeSettings?: AccountSettingsDTOLocaleAndTimeSettings
  preferences?: Array<PreferencesDTO>
  notificationSettings?: object | null
  layoutAndThemeSettings?: AccountSettingsDTOLayoutAndThemeSettings
}