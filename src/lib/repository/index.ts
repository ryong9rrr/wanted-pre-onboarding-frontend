import { WebStorageType } from '../core/webStorage'
import SampleStorage from './SampleStorage'
import TokenStorage from './TokenStorage'

type StorageType = 'token' | 'sample'

export default function createStorage(storageType: StorageType, webStorageType: WebStorageType) {
  switch (storageType) {
    case 'token':
      return new TokenStorage(webStorageType)
    case 'sample':
      return new SampleStorage(webStorageType)
    default:
      throw new Error('invalid Storage')
  }
}
