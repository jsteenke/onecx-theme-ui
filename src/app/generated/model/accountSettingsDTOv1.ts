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
import { AccountSettingsDTOv1PrivacySettings } from './accountSettingsDTOv1PrivacySettings'
import { AccountSettingsDTOv1LocaleAndTimeSettings } from './accountSettingsDTOv1LocaleAndTimeSettings'
import { AccountSettingsDTOv1LayoutAndThemeSettings } from './accountSettingsDTOv1LayoutAndThemeSettings'

export interface AccountSettingsDTOv1 {
  version?: number
  creationDate?: string
  creationUser?: string
  modificationDate?: string
  modificationUser?: string
  id?: string
  privacySettings?: AccountSettingsDTOv1PrivacySettings
  localeAndTimeSettings?: AccountSettingsDTOv1LocaleAndTimeSettings
  notificationSettings?: object | null
  layoutAndThemeSettings?: AccountSettingsDTOv1LayoutAndThemeSettings
}