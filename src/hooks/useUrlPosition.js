import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams, setSearchParams] = useSearchParams();
  const positionLat = searchParams.get("lat");
  const positionLng = searchParams.get("lng");

  return [positionLat, positionLng];
}
