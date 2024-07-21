package com.rcs.repos;

import com.rcs.models.MyModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyRepository extends CrudRepository<MyModel, String> {
}
