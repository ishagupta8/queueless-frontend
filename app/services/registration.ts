import { apiClient1 } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function loginUser(userid: string) {
  return apiClient1.post(ApiConfig.PATH, { userid});
}
