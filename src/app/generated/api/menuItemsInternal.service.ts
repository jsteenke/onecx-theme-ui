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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core'
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpParameterCodec,
  HttpContext,
} from '@angular/common/http'
import { CustomHttpParameterCodec } from '../encoder'
import { Observable } from 'rxjs'

// @ts-ignore
import { MenuItemDetailsDTO } from '../model/menuItemDetailsDTO'
// @ts-ignore
import { MenuItemListDTO } from '../model/menuItemListDTO'
// @ts-ignore
import { MenuStructureListDTO } from '../model/menuStructureListDTO'
// @ts-ignore
import { PortalMenuItemDTO } from '../model/portalMenuItemDTO'
// @ts-ignore
import { RestException } from '../model/restException'
// @ts-ignore
import { RestExceptionDTO } from '../model/restExceptionDTO'

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS } from '../variables'
import { Configuration } from '../configuration'

export interface AddMenuItemForPortalRequestParams {
  portalId: string
  menuItemDetailsDTO?: MenuItemDetailsDTO
}

export interface BulkPatchMenuItemsRequestParams {
  portalId: string
  menuItemDetailsDTO?: Array<MenuItemDetailsDTO>
}

export interface DeleteAllMenuItemForPortalRequestParams {
  portalId: string
}

export interface DeleteMenuItemByIdRequestParams {
  menuItemId: string
  portalId: string
}

export interface GetMenuItemByIdRequestParams {
  menuItemId: string
  portalId: string
}

export interface GetMenuStructureForPortalIdRequestParams {
  portalId: string
}

export interface GetPortalMenuItemsRequestParams {
  portalId: string
}

export interface PatchMenuItemRequestParams {
  menuItemId: string
  portalId: string
  menuItemDetailsDTO?: MenuItemDetailsDTO
}

export interface UploadMenuStructureRequestParams {
  portalId: string
  menuStructureListDTO?: MenuStructureListDTO
}

@Injectable({
  providedIn: 'any',
})
export class MenuItemsInternalAPIService {
  protected basePath = 'http://localhost'
  public defaultHeaders = new HttpHeaders()
  public configuration = new Configuration()
  public encoder: HttpParameterCodec

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration
    }
    if (typeof this.configuration.basePath !== 'string') {
      if (typeof basePath !== 'string') {
        basePath = this.basePath
      }
      this.configuration.basePath = basePath
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec()
  }

  // @ts-ignore
  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
    if (typeof value === 'object' && value instanceof Date === false) {
      httpParams = this.addToHttpParamsRecursive(httpParams, value)
    } else {
      httpParams = this.addToHttpParamsRecursive(httpParams, value, key)
    }
    return httpParams
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
    if (value == null) {
      return httpParams
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        ;(value as any[]).forEach((elem) => (httpParams = this.addToHttpParamsRecursive(httpParams, elem, key)))
      } else if (value instanceof Date) {
        if (key != null) {
          httpParams = httpParams.append(key, (value as Date).toISOString().substr(0, 10))
        } else {
          throw Error('key may not be null if value is Date')
        }
      } else {
        Object.keys(value).forEach(
          (k) => (httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k))
        )
      }
    } else if (key != null) {
      httpParams = httpParams.append(key, value)
    } else {
      throw Error('key may not be null if value is not object or array')
    }
    return httpParams
  }

  /**
   * Add a new menu item to portal menu
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public addMenuItemForPortal(
    requestParameters: AddMenuItemForPortalRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<MenuItemDetailsDTO>
  public addMenuItemForPortal(
    requestParameters: AddMenuItemForPortalRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<MenuItemDetailsDTO>>
  public addMenuItemForPortal(
    requestParameters: AddMenuItemForPortalRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<MenuItemDetailsDTO>>
  public addMenuItemForPortal(
    requestParameters: AddMenuItemForPortalRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling addMenuItemForPortal.')
    }
    const menuItemDetailsDTO = requestParameters.menuItemDetailsDTO

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected)
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.post<MenuItemDetailsDTO>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems`,
      menuItemDetailsDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Bulk update menu Items
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public bulkPatchMenuItems(
    requestParameters: BulkPatchMenuItemsRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<Array<MenuItemListDTO>>
  public bulkPatchMenuItems(
    requestParameters: BulkPatchMenuItemsRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<Array<MenuItemListDTO>>>
  public bulkPatchMenuItems(
    requestParameters: BulkPatchMenuItemsRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<Array<MenuItemListDTO>>>
  public bulkPatchMenuItems(
    requestParameters: BulkPatchMenuItemsRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling bulkPatchMenuItems.')
    }
    const menuItemDetailsDTO = requestParameters.menuItemDetailsDTO

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected)
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.patch<Array<MenuItemListDTO>>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems`,
      menuItemDetailsDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Delete all menu items in portal
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteAllMenuItemForPortal(
    requestParameters: DeleteAllMenuItemForPortalRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any>
  public deleteAllMenuItemForPortal(
    requestParameters: DeleteAllMenuItemForPortalRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<any>>
  public deleteAllMenuItemForPortal(
    requestParameters: DeleteAllMenuItemForPortalRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<any>>
  public deleteAllMenuItemForPortal(
    requestParameters: DeleteAllMenuItemForPortalRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling deleteAllMenuItemForPortal.')
    }

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Delete a menuItem by the PortalId and the menuItemId
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteMenuItemById(
    requestParameters: DeleteMenuItemByIdRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any>
  public deleteMenuItemById(
    requestParameters: DeleteMenuItemByIdRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<any>>
  public deleteMenuItemById(
    requestParameters: DeleteMenuItemByIdRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<any>>
  public deleteMenuItemById(
    requestParameters: DeleteMenuItemByIdRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const menuItemId = requestParameters.menuItemId
    if (menuItemId === null || menuItemId === undefined) {
      throw new Error('Required parameter menuItemId was null or undefined when calling deleteMenuItemById.')
    }
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling deleteMenuItemById.')
    }

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.delete<any>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(
        String(portalId)
      )}/menuItems/${encodeURIComponent(String(menuItemId))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Retrieve menu item detail info
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getMenuItemById(
    requestParameters: GetMenuItemByIdRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<MenuItemDetailsDTO>
  public getMenuItemById(
    requestParameters: GetMenuItemByIdRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<MenuItemDetailsDTO>>
  public getMenuItemById(
    requestParameters: GetMenuItemByIdRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<MenuItemDetailsDTO>>
  public getMenuItemById(
    requestParameters: GetMenuItemByIdRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const menuItemId = requestParameters.menuItemId
    if (menuItemId === null || menuItemId === undefined) {
      throw new Error('Required parameter menuItemId was null or undefined when calling getMenuItemById.')
    }
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling getMenuItemById.')
    }

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.get<MenuItemDetailsDTO>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(
        String(portalId)
      )}/menuItems/${encodeURIComponent(String(menuItemId))}`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Fetch the menuItems of the portal in the tree structure
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getMenuStructureForPortalId(
    requestParameters: GetMenuStructureForPortalIdRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<Array<PortalMenuItemDTO>>
  public getMenuStructureForPortalId(
    requestParameters: GetMenuStructureForPortalIdRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<Array<PortalMenuItemDTO>>>
  public getMenuStructureForPortalId(
    requestParameters: GetMenuStructureForPortalIdRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<Array<PortalMenuItemDTO>>>
  public getMenuStructureForPortalId(
    requestParameters: GetMenuStructureForPortalIdRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling getMenuStructureForPortalId.')
    }

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.get<Array<PortalMenuItemDTO>>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems/tree`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Returns a list of portal menu items
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getPortalMenuItems(
    requestParameters: GetPortalMenuItemsRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<Array<MenuItemListDTO>>
  public getPortalMenuItems(
    requestParameters: GetPortalMenuItemsRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<Array<MenuItemListDTO>>>
  public getPortalMenuItems(
    requestParameters: GetPortalMenuItemsRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<Array<MenuItemListDTO>>>
  public getPortalMenuItems(
    requestParameters: GetPortalMenuItemsRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling getPortalMenuItems.')
    }

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.get<Array<MenuItemListDTO>>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems`,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Update an existing menu item
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public patchMenuItem(
    requestParameters: PatchMenuItemRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<MenuItemDetailsDTO>
  public patchMenuItem(
    requestParameters: PatchMenuItemRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<MenuItemDetailsDTO>>
  public patchMenuItem(
    requestParameters: PatchMenuItemRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<MenuItemDetailsDTO>>
  public patchMenuItem(
    requestParameters: PatchMenuItemRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const menuItemId = requestParameters.menuItemId
    if (menuItemId === null || menuItemId === undefined) {
      throw new Error('Required parameter menuItemId was null or undefined when calling patchMenuItem.')
    }
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling patchMenuItem.')
    }
    const menuItemDetailsDTO = requestParameters.menuItemDetailsDTO

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected)
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.patch<MenuItemDetailsDTO>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(
        String(portalId)
      )}/menuItems/${encodeURIComponent(String(menuItemId))}`,
      menuItemDetailsDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }

  /**
   * Upload and overwrite menuStructure in portal
   * @param requestParameters
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public uploadMenuStructure(
    requestParameters: UploadMenuStructureRequestParams,
    observe?: 'body',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any>
  public uploadMenuStructure(
    requestParameters: UploadMenuStructureRequestParams,
    observe?: 'response',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpResponse<any>>
  public uploadMenuStructure(
    requestParameters: UploadMenuStructureRequestParams,
    observe?: 'events',
    reportProgress?: boolean,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<HttpEvent<any>>
  public uploadMenuStructure(
    requestParameters: UploadMenuStructureRequestParams,
    observe: any = 'body',
    reportProgress: boolean = false,
    options?: { httpHeaderAccept?: 'application/json'; context?: HttpContext }
  ): Observable<any> {
    const portalId = requestParameters.portalId
    if (portalId === null || portalId === undefined) {
      throw new Error('Required parameter portalId was null or undefined when calling uploadMenuStructure.')
    }
    const menuStructureListDTO = requestParameters.menuStructureListDTO

    let localVarHeaders = this.defaultHeaders

    let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept
    if (localVarHttpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = ['application/json']
      localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts)
    }
    if (localVarHttpHeaderAcceptSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected)
    }

    let localVarHttpContext: HttpContext | undefined = options && options.context
    if (localVarHttpContext === undefined) {
      localVarHttpContext = new HttpContext()
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json']
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes)
    if (httpContentTypeSelected !== undefined) {
      localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected)
    }

    let responseType_: 'text' | 'json' | 'blob' = 'json'
    if (localVarHttpHeaderAcceptSelected) {
      if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
        responseType_ = 'text'
      } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
        responseType_ = 'json'
      } else {
        responseType_ = 'blob'
      }
    }

    return this.httpClient.put<any>(
      `${this.configuration.basePath}/internal/portals/${encodeURIComponent(String(portalId))}/menuItems/upload`,
      menuStructureListDTO,
      {
        context: localVarHttpContext,
        responseType: <any>responseType_,
        withCredentials: this.configuration.withCredentials,
        headers: localVarHeaders,
        observe: observe,
        reportProgress: reportProgress,
      }
    )
  }
}