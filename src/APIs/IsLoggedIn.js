
import { useCookies } from "react-cookie";
const IsLoggedIn = () => {
    const [cookies] = useCookies(["user"]);
   
        if (cookies.user) {
            return 1;
          } else {
              return 0
          }

}

export default IsLoggedIn