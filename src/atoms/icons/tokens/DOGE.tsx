import React from 'react';

export const Doge = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
  >
    <rect width="32" height="32" fill="url(#pattern678)" rx="16" />
    <defs>
      <pattern
        id="pattern678"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use transform="scale(.02)" xlinkHref="#image0_119_4192" />
      </pattern>
      <image
        id="image0_119_4192"
        width="50"
        height="50"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAOHklEQVRoBcWaeXxTZbrHO/+4/HPvHbRFpNBiK3tp2comZSmyr7Iji1A2gbKjII4ssslabEFA9rUUgYLDZlNQZ0DnuuCogzoC4nIB6ZM2aXKSNGnO937e5ARiSUrriObzeT/n5Jws7zfv8z6/Z0lExG/wGJhmrTJo1K2U4SML5qQNK8ieMMh8ceoAuTm7jzjn9RJ9YXfRl3QR54qOcnN1ivnips7m7DMvFc+xXScFqPIbTOHXf0S39G8fbDdJmneZWLC45zg533+0mIeMFO/IZ4WxQ4TnBwrTnhFm9xHmdhcW9RA2jSkiL8POt++WUHzd69W9FALngUVAc+DBXz+jSr4zPp0HG8+WTi2mF2S3TRfpOEnoOkHoPVboP1oYOlIYZcBM7C/MHCS88ZKVj8+4sN7youuEewhwAEi970CNFhY2TJxv3p74otnaZKbQYprQNl1IDYIZMFoYMsIPs3S+hX+858JhDz/7EFQWYDuQAPypkr9z+S+PXsvD9RZbxjZYWHQl4eUiGs0rJHGOmaYzhZbThJQpQurzQrfxQq8xwugpZg69pWEp8oaYZ/mX1Ip5NB37tdKr3+7SxuZE/Phw+bOr4N24VbaouiutWfWWWRz1X7XQcEERCS8X0miumSQDppUB03GCMHmxhU+/cOOtBIPLrvPzJQ+Xjji5sMSGaYyF0z0K+WtrszM3STYcaXQzqoLTDf2yWlnOmNrrbLl11tj0uq8VU2+ZlQaL74ZpplZmqjAz08r3N0rL/8mNux63zk9fe3h/l8aBdAtbepjZ/JSwLVnY00w42EQ4kiTkJomemyTHDjcuigk9y3tcrbXVGRO3UTsVn6nxZIadOqtt+GCWBsHM969Mo1lC+mYrN8z3XoYSl86XH5WwZ3kxy4aYWdxZWN5RWNtByGonbHlK2NFK2JcsHGoqHG3sgyE3seBUpWHidtuiam115D6xxUHcRo34TDu114WAeaWIBvMKGb7Byg9S/koo27/8rYdNa4qZNczMjN7C3F7CK92FJV2F154W1nW8A7MzBMzRJMmtsJnF7uChGnvdWTE7XXqtbU6e2GzAvB4Es6KY+kut1FtoIXW1lYvfe8o1J6dL5+1TTqZMKeS5wcKEQcLU/sKsvsK8AEwXYWUnYV0HYUOK8GYbYWdLYX9z4a0mwtE7ZpZ1rv13D93DoCIiog+6x9U44HbW3FNCzE4XtbbegXnSB2Ojzqpi6q4oJmGZlX3/W1IuRFGxl8xddgaMFQaNEEYMF9KGChMNmNkGzILuwlIDJqODsNGA2dVSOGDA5CqYRHEeSyoYVy5I1dyShOqHS69E53iosd+ND2ZHEMwGDR/MWhvxrxUzLkej2BVeIyx2nVe32+g8QehpCOaQkYJS/7SA+vf3q/9LvYSFBsyqTkIAZmsbIQBzuImxX5Lkcm5CYUJImPo5PPDY297t1XJLqX7YQ/RB922Y2ADMJgfxGzTi19tJyrTz7tXwJlXi0Vl7xM5T6UJA/XsFqX8glJlkhDJz+gjzewoLuwnLOgurUoX17YU32goKZndLIbu5EASzPac+D9wFU/U0naqe0i2Pve3lLpjdJfhg3nTyxCYHtTI1xh934gjPwYlPXbR60RxW/QOhzLghgoKZ/owQgFlkwKxOFV43YLa1Fna3ELKbCYf9nsxyLMn89C9BcnggKo/9Ue9A1ZM6CuZxtTJveXg8283je0uovstFjW0uam52ErfJQe434SluWLz0z7BSf6aQOF1oni60mSS0nyB0Hiv0HC30GykMflYYMURIGyhMfEaY2keY3VOY101Y0FlYmiqsai9ktBU2tha2thB2JwsHmwlHFEzjguxfrMoj+SRHmiiINEHUmTsw1Y6W8uzfSln1eSkrPytl1aceVn3s4Y2LHsQRfm9cuVVKlslB5hkHWac0Np7U2PxXja3HNXYc09h9VGPfEY0Db2nkHNI4fFAjN1vj7f0aJ/dqnNmjYdqtcW6nxvs7NM5v0/jwTY2Ptmq8M8PK3hYBmIKCo4mSfHtVokwsUhCBoWCiTug0OO3ls6LwEy7XXd2Hm14PnF1kY1sLYW+ykNNUrUzBIh/If52mSqSJ8wEI3zEPHjkN4y/quO8t1vdhyqE/8uZXHrb2LmRzmzvqn9NMzue0slaJiMwnJcqEORjkURNE58PJn0N/4B919dxmjTXt71J/88Hmt1IiovKZHWnCGwxSJQ96fAxF4ffz785SdMPLxtFFrEgto/6txLsnuWBORKSJ7GAIdR5lgq0//u5zLfcLLxx3otR/SZD6B0KZHa0LshXIxbIg0Wdh2iVYfgWWXTbGv2Hp1zqHf9Lxhtn/mht2fu5h9QU3a8+XsO7vJWS87yLjXRfrzzp53eTk9bwgb3YitDfLfkvjUJA3O75PY+XkIub1EB+MCmWC1X9LG/NFBXKzLIh6rszrF+MM/PcJnfGf6mHz7ut2nbZ7ndTM1KiVYSdutT+Uqb3MSp3FFuouKKLe/EIazC2k4WwziTOEZlOFVpOFdhOFp8cJPcYIfUcJg4YLw4cKYwYJE/oLU/v5BfOlYPXv5Ff/DSlyU4E4Q4GEulblDEz7IrwFXLPqtNzvotYb/lDmyfV2aq+1UWdlMfWWW6m/xEqDhRYS/mKkyy+YaTJLaDHdn/sHQplQhYzy1H99B3EqED3UpENd+3MezPhXeJCrVp3kbBexRigTn6URgKkbgHnVQoOFRb+EMXL/toHc36jKqELGMKMqExzKvNBHeLmnoEKZ5Z2F1amiVxpkSjkg14p1kg+VUHO7i1oKRq1MAGaNDR/MMiu+3F/BqNw/RCGjk1HI6JMmDHhOGDZCeG6YMG6wMHmAMKOfEIBZ7IfxgdzTtJSuqPE/eTD6cygNs9lvOHSeOuYmeqeLmG1OYrf4YeIyNeIz7Dy52kad14qpq5KyxRYaLCii4fxCEuaaSZxtpskMf+6fMllIneivyiiYgc8Jzxow4wcLUwyYF3sLf+khLO7mN62Qmz1gWjXOQp33oPZ7EPcujPonuMKovc0Nw855aJjjJjG7hMb7XDTZ5aTpdgfN3tRovkmjxQY7LV+30WpdMa1XWWmzwkLbpUWkLC6i3YJCUl8upOu8Qnq9YKbLZKH7eKFvmjDIgBk9TAjAzOwnzO0tvNzDv9nvcr8BiMfyIfMafGWHL23whQ2uaIR1v2qhrtl0/lWoc0kNsxpeLomXSwVevlLjljF+9vL1zVL/uFHK19dL+UaN/yvl8vVS8j8poeccM50mCj3GCf3GCINGCcOHCwpmwmAhfYAwq5/wYm+/+71LEBXII3nw1Adw3RV+c9/POzvyHLSeKrSfLHQOghlswIwx0uX0/sL0vgXZEVF5zCkbogRAlBj+EY+CYi+D11hoOk1oM1XoYMD0NFZGwajc34DxThlQMDts0Fj/ffii+I/AgOOfltBknpnGs4Tk6UKbdKHDJKGLkfs/M0YYYsCkDRXzhEG3UiJChfFK0Sd9CZ4w3ul+4jncOhN323zqn/jCHZhA7q9gArm/KmSMGC7n0wZa/T2WsolV9bNw8DoUuUFKQg9nGM8VgFSercAFUnY4dcyB4dAxBw2LU+fcvz0kL7fQUKn/S4UomHLVf5SRWKnsKjjVVfujWj60uAApH0LbsuMDaPMBZF0LTDn08QcHDPuHTkq+l455paSe9tDphIenj7vpfLSELodddM1x0e2Ak+57HfTYpdFrh512mTafYN4Vyqg2hhHKqDZGN5/6FxT0TQtKdSNyeKBsOK+8ViBoVOfBQwljqwvwgzM0RODq3h90Yk94iTxSymOH/IWM6ntLiPYVMpzEbHESu9HBE5kacRl24lfbqG0Uy++of/g2RtcJ5v0DB5YpCUWZeDrShCWgIRU5rv0uMOXQR7XHNl/ViTvppeoRf1UmOttNjX0lxOxyEbvd6Qtl4gKhTIad2mVDmUAbY15h2TaGJfV56XS78HD7RK1KHtsrAqBe84gJkv4On9/DsymYAz/oNH7HgDnkQcHUDIbZ4sQHE6j8K5jAytzVxhB8bYxpsv2u1QjAVM0jIdLE5YrCKNN77nOw3iMlVs7vo0IY+oGXGkdLqZZjwOw1VkYVy1Xl/w1V+S/TxgjuyRhtjKQ55itNZ4QpmQZgHs1jXGVylKr5sPJKxVy1xQ27v9PpnF9KjUMequ13U0PB7HQRG4C5RxsjYX6hM2GeufwitoKJPcdDkSayKpqnqKg45hzs+DF8DFZ2B/3shD1XdQaeK6XuITfV95QQvcNFTFDlPz5EG6PBIoue8EpRVuzCCrQVFEzVM0Q9aiK3oiam9ouKjLf9CO5KiKjNAx/e0ln1z1IGnHHTJLuEuG1OYjY5iM3SeGK9nfi1NmobbYz6S625jRbaKtdPrJZPTKSJU5WBqXkOllz2C2nZVbjXc7sbvi7SeftqKWs+9jA1r4TBh5103eOg3ZsajdYWn6q35Ff2ERVMVB7HKmNmqpQ09DP4xAr3EP9y2VSlRlVlCjRdv1Sg5y7Jd/66Zmhg8yszizSxoTIOQHmzhn+DFVfgewdUwtrKwjmALKBy5hSYfNlj9AUeNrzZ1cqYmnIELS/4vdolW+X2D3AFGAv8Nn8YuA0Ff/LpjF80KxwB+EIbEzR4H8Z+AQeuwzd20MI3ga3GXzga3v7u+3ESf5IHq75DaqSJA5EmpKIrpFZHlZOqmvxm1/cTmP8N7PwJzgr86ET9qSYb6HTf/1QT/MMooEdMNDdSANWWKAyVaYYCVVBV8vD+Oc/XBTgfd5bFaZ+R/LsCBMMEzn3JmWpP+NNmVQNQBQ1VnVGlJlUAVEOdq2vqXrbvtfmkqPcGPuc/Of4/IBVpFKiKgiwAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
