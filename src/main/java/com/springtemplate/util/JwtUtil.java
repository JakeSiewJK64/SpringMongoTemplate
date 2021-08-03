package com.springtemplate.util;

import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import com.springtemplate.models.UserModel;

import org.json.JSONObject;
import org.springframework.security.core.userdetails.UserDetails;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class JwtUtil {
    private String SECRET_KEY = "secret";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    public Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserModel userModel) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userModel);
    }

    public String createToken(Map<String, Object> claims, UserModel user) {

        JSONObject json = new JSONObject();
        json.put("username", user.getUsername());
        json.put("role", user.getRole());
        json.put("issued_at", new Date(System.currentTimeMillis()));
        json.put("expiration_date", new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10));

        return Jwts.builder().setPayload(json.toString()).signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
}
