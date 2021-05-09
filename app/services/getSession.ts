import { apiClient1 } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function getSession() {
  return apiClient1.get(ApiConfig.BASE_URL+ApiConfig.PATH);
}
