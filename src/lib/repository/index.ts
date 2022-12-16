import { WebStorageType } from '../core/webStorage'
import TokenStorage from './tokenStorage'

type StorageType = 'token'

export default function createStorage(storageType: StorageType, webStorageType: WebStorageType) {
  switch (storageType) {
    case 'token':
      return new TokenStorage(webStorageType)
    default:
      throw new Error('invalid Storage')
  }
}
