# Helloworld YTSCD 🚀

Basit bir **Node.js + Express REST API** örneği.  
Proje, `POST /hello` endpoint’i üzerinden kullanıcıdan isim alır ve **Hello, <isim>!** mesajı döner.

---

## Kurulum

### Gereksinimler
- Node.js (>= 18)
- npm (>= 9)
- Postman (test için, opsiyonel)

### Adımlar
# Kaynağı klonla
git clone https://github.com/ceren15/helloworld_ytscd.git
cd helloworld_ytscd

# Bağımlılıkları yükle
npm install

Çalıştırma
# Development (hot reload ile)
npm run dev

# Production
npm start

Kullanım
1) Health check
GET http://localhost:8000/health

Response:
{ "status": "ok" }

2) Hello endpoint
GET http://localhost:8000/hello?name=Ceren

Response:
{ "message": "Hello, Ceren!" }

POST http://localhost:8000/hello

Content-Type: application/json

{
  "name": "Ceren"
}

Response:
{ "message": "Hello, Ceren!" }
