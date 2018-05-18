package com.slyak.mirrors.domain;

import lombok.Data;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * .
 *
 * @author stormning 2018/5/16
 * @since 1.3.0
 */
@Entity
@Table(name = "t_host")
@Data
public class Host extends AbstractPersistable<Long> {

    private String address = "127.0.0.1";

    private String name = "127.0.0.1";

    private int sshPort = 22;

    private String user = "root";

    private String password;

    private String privateKey;
}
