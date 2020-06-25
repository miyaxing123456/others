const crypto = require('crypto');
const password = '用于生成密钥的密码';
function scrypt(data) {
    const algorithm = 'aes-192-cbc';
  
    // 改为使用异步的 `crypto.scrypt()`。
    const key = crypto.scryptSync(password, '盐值', 24);
    // 使用 `crypto.randomBytes()` 生成随机的 iv 而不是此处显示的静态的 iv。
    const iv = Buffer.alloc(16, 0); // 初始化向量。

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    console.log(encrypted);
    return encrypted;
}

function encrypt(encrypted) {
    const algorithm = 'aes-192-cbc';   
    // 改为使用异步的 `crypto.scrypt()`。
    const key = crypto.scryptSync(password, '盐值', 24);
    // IV 通常与密文一起传递。
    const iv = Buffer.alloc(16, 0); // 初始化向量。
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    // 使用相同的算法、密钥和 iv 进行加密。
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports={
    scrypt,
    encrypt
}
