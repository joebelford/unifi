db.getSiblingDB("unifi").createUser({ user: "", pwd: "", roles: [{ role: "dbOwner", db: "unifi" }] });
db.getSiblingDB("unifi_stat").createUser({ user: "", pwd: "", roles: [{ role: "dbOwner", db: "unifi_stat" }] });
