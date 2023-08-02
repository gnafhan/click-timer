import time
import pyautogui

print("start")
def click_after_5_seconds():
    # Menunggu selama 5 detik
    time.sleep(5)

    # Mendapatkan posisi kursor mouse saat ini (opsional)
    posisi_x, posisi_y = pyautogui.position()
    # print(f"Posisi kursor saat ini: {posisi_x}, {posisi_y}")

    # Melakukan klik mouse
     print("click")
    pyautogui.click()


# Memanggil fungsi click_after_5_seconds()
click_after_5_seconds()
