function tinhDiem() {
    let toan = Number(document.getElementById("toan").value)
    let van = Number(document.getElementById("van").value)
    let anh = Number(document.getElementById("anh").value)
    let kv=document.getElementById("kv").value
    sum = toan + van + anh
    let khuVuc
    switch (kv) {
        case "kv1":
            khuVuc = 0.75
            break
        case "kv2":
            khuVuc = 0.25
            break
        case "kv2nt":
            khuVuc = 0.5
            break
        case "kv3":
            khuVuc = 0
            break
    }
    document.getElementById("ketQua").innerHTML = `Tổng điểm ĐH khối D của bạn là ${sum + khuVuc}.`
}