import { useEffect, useRef } from "react";

const useMaps = () => {
  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    const windowThis = window as any;
    mapRef.current = new windowThis.naver.maps.Map("map", {
      center: new windowThis.naver.maps.LatLng(
        36.3315070625052,
        127.338648743597
      ),
      zoomControl: false,
      zoom: 17,
      maxZoom: 19,
      minZoom: 16,
      disableDoubleClickZoom: true,
      disableDoubleTapZoom: true,
      mapDataControl: false,
    });
    new windowThis.naver.maps.Marker({
      position: new windowThis.naver.maps.LatLng(
        36.3315070625052,
        127.338648743597
      ),
      map: mapRef.current,
    });
  }, []);
};

export default useMaps;
